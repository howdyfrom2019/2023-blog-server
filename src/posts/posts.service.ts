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
      type: IPostState.PUBLIC
    };

    this.posts.push(post);
    return post;
  }
}
