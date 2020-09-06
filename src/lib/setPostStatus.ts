export default function (status: string): string {
  switch (status) {
    case "0":
      return "판매중";
    case "1":
      return "예약중";
    case "2":
      return "거래완료";
    default:
      return "예약중";
  }
}
