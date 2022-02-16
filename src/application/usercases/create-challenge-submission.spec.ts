import { CreateChallengeSubmsission } from './create-challenge-submission'
import {InMemoryStudentsRepository} from "../../../test/repository/in-memory-students-repository";
import {InMemoryChallengesRepository} from "../../../test/repository/in-memory-challenges-repository";
import {Student} from "../../domain/entities/student";
import {Challenge} from "../../domain/entities/challenge";

describe('Create challenge submission use case',  () => {
	it ('should be able  to create a new challenge submission', async () => {
		const studentsRepository = new InMemoryStudentsRepository();
		const challengesRepository = new InMemoryChallengesRepository();
		
		const student = Student.create({
			name: 'Djonatas',
			email: 'djonatas@live.com'
		})
		studentsRepository.items.push(student);
		
		const challenge = Challenge.create({
			title: 'Challenge 1',
			instructionsUrl: 'www.url.com.br'
		})
		challengesRepository.items.push(challenge);
		
		const sut = new CreateChallengeSubmsission(studentsRepository, challengesRepository)
		const response = await sut.execute({
			studentId: student.id,
			challengeId: challenge.id
		})
		
		expect(response).toBeTruthy();
	})
});
