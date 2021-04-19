import { v4 as uuidV4 } from 'uuid'

import { Column, Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('categories')
class Category {
  @PrimaryColumn()
  id?: string

  @Column()
  name: string

  @Column()
  description: string

  @CreateDateColumn()
  created_at?: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }

    if (!this.created_at) {
      this.created_at = new Date()
    }

    if (!this.updated_at) {
      this.updated_at = new Date()
    }
  }
}

export { Category }
