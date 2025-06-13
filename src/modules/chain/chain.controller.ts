import { Controller, Get, Post, Body } from '@nestjs/common';
import { ChainService } from './chain.service';
import { CreateChainDto } from './dto/create-chain.dto';

/**
 * ChainController manages API endpoints for fast-food chains.
 * Routes:
 *  GET /chains - Get all chains
 *  POST /chains - Create a new chain
 */

@Controller('chains')
export class ChainController {
  // Inject ChainService to handle business logic
  constructor(private readonly chainService: ChainService) {}

  /**
   * Returns a list of all chains in the database.
   */
  @Get()
  async findAll() {
    return this.chainService.findAll();
  }

  /**
   * Creates a new chain based on the data provided in the request body.
   * @param createChainDto Data to create the chain
   */
  @Post()
  async create(@Body() createChainDto: CreateChainDto) {
    return this.chainService.create(createChainDto);
  }
}
