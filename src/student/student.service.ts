import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import {
  CreateStudentDto,
  FindStudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { students } from '../db';

@Injectable()
export class StudentService {
  private students = students;
  getStudents(): FindStudentResponseDto[] {
    return this.students;
  }

  getStudentById(studentId: string): FindStudentResponseDto {
    return this.students.find((student) => student.id === studentId);
  }

  createStudent(payload: CreateStudentDto): FindStudentResponseDto {
    let newStudent: FindStudentResponseDto = {
      id: uuid(),
      ...payload,
    };

    this.students.push(newStudent);

    return newStudent;
  }

  updateStudent(payload: UpdateStudentDto, studentId): FindStudentResponseDto {
    let updatedStudent: FindStudentResponseDto;

    const updatedStudentsList = this.students.map((student) => {
      if (student.id === studentId) {
        return (updatedStudent = {
          id: studentId,
          ...payload,
        });
      } else return student;
    });

    this.students = updatedStudentsList;

    return updatedStudent;
  }
}
