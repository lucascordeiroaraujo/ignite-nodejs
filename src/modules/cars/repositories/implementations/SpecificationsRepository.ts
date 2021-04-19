import { Specification } from '@modules/cars/entities/Specification'

import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from '../ISpecificationsRepository'

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[]

  constructor() {
    this.specifications = []
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specifications = new Specification()

    Object.assign(specifications, {
      name,
      description,
    })

    this.specifications.push(specifications)
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      specification => specification.name === name,
    )

    return specification
  }
}

export { SpecificationsRepository }
