import { Module } from '@nestjs/common';
import { StudentTeacherController } from 'src/teacher/student.controller';
import { TeacherController } from 'src/teacher/teacher.controller';
import { StudentController } from '../student/student.controller';

@Module({
  imports: [],
  controllers: [StudentController, TeacherController, StudentTeacherController],
})
export class AppModule {}
