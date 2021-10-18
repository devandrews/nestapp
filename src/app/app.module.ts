import { Module } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';
import { StudentController } from '../student/student.controller';

@Module({
  imports: [],
  controllers: [StudentController],
  providers: [StudentService],
})
export class AppModule {}
