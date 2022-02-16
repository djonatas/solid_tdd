import { Student } from "../../src/domain/entities/student";
import {StudentsRepository} from "../../src/application/repository/StudentRepository";

export class InMemoryStudentsRepository implements StudentsRepository  {
	public items : Student[] = [];
	async findById(id: string): Promise<Student | null> {
		const student =  this.items.find(i => i.id === id);
		
		if (!student) {
			return null
		}
		return student;
	}
	
}
