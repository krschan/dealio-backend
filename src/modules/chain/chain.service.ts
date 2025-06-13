import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chain } from './chain.entity';
import { CreateChainDto } from './dto/create-chain.dto';

/**
 * ChainService handles all database operations related to chains.
 */

@Injectable()
export class ChainService {
  constructor(
    // Injects the TypeORM repository for Chain entity to perform DB operations
    @InjectRepository(Chain)
    private readonly chainRepository: Repository<Chain>,
  ) {}

  /**
   * Retrieves all chains from the database.
   * @returns Promise resolving to an array of Chain entities
   */
  findAll() {
    return this.chainRepository.find();
  }

  /**
   * Creates and saves a new chain in the database.
   * @param createChainDto Data to create the new chain
   * @returns Promise resolving to the saved Chain entity
   */
  create(createChainDto: CreateChainDto) {
    const newChain: Chain = this.chainRepository.create(createChainDto);
    return this.chainRepository.save(newChain);
  }
}
