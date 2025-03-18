import { Controller, Get, Post, Body } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getPosts() {
    return this.postService.findAll();
  }

  @Post()
  createPost(@Body('content') content: string) {
    return this.postService.create(content);
  }
}
