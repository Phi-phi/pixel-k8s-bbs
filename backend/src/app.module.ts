import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post/post.entity';
import { PostModule } from './post/post.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql', // Kubernetes上のDBサービス名
      port: 3306,
      username: 'admin',
      password: 'secret',
      database: 'boarddb',
      entities: [Post],
      synchronize: true,
    }),
    PostModule,
    HealthModule
  ],
})
export class AppModule {}
