import { getAllPosts } from '@/service/posts';

export default async function NextPost() {
    const posts = await getAllPosts()
    return (
    
    );
}

