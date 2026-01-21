// data/members.ts
export type Member = {
  name: string;        // 表示名（源氏名など）
  reading?: string;    // ふりがな
  species: string;     // 種族
  personality: string; // 性格（短文）
  bio: string;         // 紹介文（複数行OK）
};

export const members: Member[] = [
  {
    name: "噺乃 蓮次郎",
    reading: "はなしの れんじろう",
    species: "妖",
    personality: "口が回り調子はいいが、軽口が多く、つい余計なことをしてしまう",
    bio:
      "忍桜郷に迷い込んだ噺家の妖。\n" +
      "郷の長である白桜の桜餅をつまみ食いしてしまい、その罰として忍桜郷でタダ働きをさせられている。"
  }
];
