import { Injectable } from '@nestjs/common';
import { IPostItem, IPostState } from './posts.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class PostsService {
  private posts: IPostItem[] = [];

  getAllPosts(): IPostItem[] {
    return this.posts;
  }

  createPost(title: string, description: string) {
    const post: IPostItem = {
      id: uuid(),
      title,
      description,
      type: IPostState.PUBLIC,
    };

    this.posts.push(post);
    return post;
  }

  getPostById(id: string): IPostItem {
    return this.posts.find((post) => post.id === id);
  }

  deletePostById(id: string): void {
    this.posts = this.posts.filter((post) => post.id !== id);
  }

  updatePost(props: IPostItem) {
    const { id, title, description, type } = props;
    const post = this.posts.find((post) => post.id === id);

    post.title = title;
    post.description = description;
    post.type = type;
    return post;
  }
}
