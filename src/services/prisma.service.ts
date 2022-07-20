import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient{
    constructor(){
        super({
            datasources:{
                db:{
                    url: 'mysql://root:sahan@2003226@localhost:3306/workerslobby-guest-backend'
                }
            }
        })
    }
}
