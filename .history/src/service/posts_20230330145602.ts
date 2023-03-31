interface Post {
  // "title": "2021년 리뷰",
  // "description": "2021년 한해 동안 배운 기술들, 생각들 정리",
  // "date": "2021-12-31",
  // "category": "my story",
  // "path": "review-2021",
  // "featured": false
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
}

export async function getAllPosts(): Promise<Post[]> {}
