import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudentsByTeacher() {
    return 'Students By Teacher';
  }

  @Put('/:studentId')
  updateStudentsTeacher() {
    return 'Update Student By Teacher';
  }
}
