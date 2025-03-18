import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post/post.entity';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db', // Kubernetes上のDBサービス名
      port: 3306,
      username: 'admin',
      password: 'secret',
      database: 'boarddb',
      entities: [Post],
      synchronize: true,
    }),
    PostModule,
  ],
})
export class AppModule {}
