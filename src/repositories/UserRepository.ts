import User from "../models/User";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  public async findByCourse(course: string): Promise<User[]> {
    return this.find({
      where: {
        course,
      },
    });
  }
}