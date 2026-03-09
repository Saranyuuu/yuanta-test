import type { DealItem, UserProfile, PointsData } from "@/types";

export const mockUser: UserProfile = {
  name: "Yuanta",
  email: "yuanta_securities@email.co.th",
  tier: "Bronze",
  badge: "HNWI",
};

export const mockPoints: PointsData = {
  available: 500,
  expiryDate: "31 ม.ค. 2569",
  tier: "Bronze",
};

export const mockDeals: DealItem[] = [
  {
    id: "1",
    image: "/Deal/deal-1.png",
    title: "เข้าร่วมสัมมนา The Hidden Cue วิเคราะห์กราฟผ่านอีกมุมมอง เจาะลึ...",
    points: 200,
    category: "กิจกรรม",
    dateRange: "1 - 31 ส.ค. 68",
  },
  {
    id: "2",
    image: "/Deal/deal-2.jpg",
    title: "รีเซ็ตพอร์ตก่อนตลาดจะฟื้น เตรียมพร้อมรับโอกาสใหม่ในไตรมา...",
    points: 200,
    category: "คลังความรู้",
    isUnlimited: true,
  },
  {
    id: "3",
    image: "/Deal/deal-3.jpg",
    title: "แลกรับ Xiaomi Mi Smart Camera รุ่น C300",
    points: 300,
    category: "สินค้าพรีเมียม",
    dateRange: "1 - 31 ก.ค. 67",
  },
  {
    id: "4",
    image: "/Deal/deal-4.png",
    title: "LINE MAN: Get 100 THB discount with no.min spend",
    points: 100,
    category: "ไลฟ์สไตล์",
    isUnlimited: true,
  },
];
