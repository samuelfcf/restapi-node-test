import Class from "../models/Class";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Class)
export default class ClassRepository extends Repository<Class> {
  public async findByName(name: string): Promise<Class[]> {
    return this.find({
      where: {
        name,
      }
    });
  }
}