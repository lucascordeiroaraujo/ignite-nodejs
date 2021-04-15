import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository'

interface IRequest {
  name: string
  description: string
}

class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {
    //
  }

  execute({ name, description }: IRequest): void {
    const categoryAlreadExists = this.categoryRepository.findByName(name)

    if (categoryAlreadExists) {
      throw new Error('Category already exists')
    }

    this.categoryRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase }
