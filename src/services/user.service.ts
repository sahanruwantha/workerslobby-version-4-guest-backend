import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { User } from '@prisma/client';

@Injectable()
export class UserService{
    constructor(private prismaService: PrismaService){}

    validateUser(userId: number): boolean {
        const user = this.prismaService.user.findFirst({
            where: { userid: Number(userId)}
        })
        if(user)
            return true
        else
            return false
    }
}