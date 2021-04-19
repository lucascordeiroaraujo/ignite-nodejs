import { Category } from '@modules/cars/entities/Category'

import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository'

class ListCategoriesUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoryRepository.list()

    return categories
  }
}

export { ListCategoriesUseCase }
