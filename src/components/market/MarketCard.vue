<template>
<div class="market-page">
  <div v-if="markets.length > 0" class="market-list">
    <div v-for="(market, index) in markets.slice().reverse()" :key="index" class="market-item" @click="openMarketDetailModal(market)">
      <img :src="market.imageUrl" alt="Market Image" class="market-image" />
    </div>
  </div>
  <div v-else>
    <p>등록하신 분양글이 없습니다.</p>
  </div>
  <div v-if="isMarketDetailOpen">
    <div>
      <MarketInDiaryModal v-model:isMarketDetailOpen="isMarketDetailOpen" :marketId="itemMarketId" @update:modelValue="isMarketDetailOpen = $event"/>
    </div>
  </div>
</div>
</template>

<script setup>
import { useUserstore } from '@/stores/users';
import { ref, onMounted, reactive } from 'vue';
import MarketInDiaryModal from './MarketInDiaryModal.vue';
import { useRoute, useRouter } from "vue-router";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const userStore = useUserstore();
const markets = reactive([]); // 게시글 조회해서 담을 리스트
const imageUrl = ref('');
const itemMarketId = ref('');
const isMarketDetailOpen = ref(false);
const userNickname = ref('');
const route = useRoute();
const router = useRouter();

const openMarketDetailModal = (market) => {
  itemMarketId.value = Number(market.marketId); // marketId를 변수에 넣어줌
  isMarketDetailOpen.value = true;
}

const closeMarketDetailModal = () => {
  isMarketDetailOpen.value = false;
}

const fetchMarkets = async () => {
  try {
    const token = localStorage.getItem('accessToken');

    // 분양게시글 조회하는 api로 전체 게시글 조회함
    const response = await fetch(`${API_BASE_URL}/market/${userNickname.value}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`서버 응답 오류 : ${errorData.message || '알수없는 오류'}`);
    }
    const responseData = await response.json(); 

    // 게시글 이미지 경로를 하나하나 꺼내옴
    responseData.forEach(market => {
      const imagePath = market.marketImage;
      market.imageUrl = `${API_BASE_URL}/ftp/image?path=${encodeURIComponent(imagePath)}`;
    });

    // markets 배열에 반응형으로 데이터를 추가
    responseData.forEach(market => markets.push(market)); // push로 데이터를 추가
  } catch (error) {
    console.error('오류:', error);
  }
}

onMounted(() => {
  userNickname.value = route.params.userNickname; // url 에서 닉네임 가져옴
  fetchMarkets();
})
</script>

<style scoped>
.market-page {
  font-family: "GothicA1-Light";
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  flex-direction: column; /* 아이템을 세로로 정렬합니다. */
  background-color: #f9fff8;
  overflow: hidden;

}

.market-list {
  display: grid;
  justify-content: space-evenly; /* 아이템 간 간격을 균등하게 */
  /* flex-direction: column; 아이템을 세로로 배치 */
  flex-wrap: wrap; /* 줄바꿈 허용 */
  height: auto;
  padding: 0 5vw;
  overflow-y: auto; /* 세로 스크롤 가능 */
  grid-template-columns: repeat(4, 1fr); /* 한 줄에 4개의 열을 생성 */
}

.market-list::-webkit-scrollbar {
  display: none; /* 스크롤바 숨기기 */
}

.market-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1vw;
  margin: 1vw;
  width: 15vw;
  height: 15vw;
  background-color: white;
  border-radius: 1vw;
  border-color: #454545;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.market-image {
  width: 100%; /* 부모 컨테이너에 맞추기 */
  height: 100%;
  object-fit: cover; /* 이미지가 박스에 맞게 잘림 */
  border-radius: 1vw; /* 이미지의 모서리를 둥글게 */
  justify-content: center; 
  align-items: center; 
  display: flex;
}
</style>
