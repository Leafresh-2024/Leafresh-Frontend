import { defineStore } from 'pinia';
import axios from 'axios';

export const useGardenStore = defineStore('useGardenStore', {
  state: () => ({
    plants: [], // 식물 목록을 저장할 배열
    plantCount: 0, // 식물 개수 저장
    isLoading: false, // 로딩 상태 추가
    errorMessage: '', // 오류 메시지 저장
  }),
  actions: {
    async fetchPlants(userNickname) {
      this.isLoading = true;  // 요청 시작 시 로딩 상태 true
      this.errorMessage = ''; // 이전 오류 메시지 초기화
      try {
        const token = localStorage.getItem('accessToken');

        // userNickname이 존재하지 않을 경우 오류 처리
        if (!userNickname) {
          throw new Error('사용자 닉네임이 전달되지 않았습니다.');
        }
     
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/plants/user/${userNickname}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // API 응답 데이터 구조 확인
        console.log('garden store API 응답 데이터:', response.data);

        // 데이터가 올바르게 설정되었는지 확인
        if (Array.isArray(response.data)) {
          this.plants = response.data;
          this.plantCount = response.data.length; // 저장된 식물 갯수
        } else {
          // 식물이 없다면
          this.plants = [];
          this.plantCount = 0;
          this.errorMessage = "등록된 식물이 없습니다.";
          console.error("등록된 식물이 없습니다.");
        }
      } catch (error) {
        console.error('식물 목록을 가져오는 중 오류가 발생했습니다:', error);
        this.plants = [];
        this.plantCount = 0;
        this.errorMessage = '식물 목록을 가져오는 중 오류가 발생했습니다.';
      } finally {
        this.isLoading = false;  // 요청이 완료되면 로딩 상태 false
      }
    },
  },
});
