import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ClientProxy, Transport } from "@nestjs/microservices";
import { ClientProxyFactory } from "@nestjs/microservices/client";
import { RabbitMQ } from "../constans";

@Injectable()
export class ClientProxySuperFlights {
  constructor(
    private readonly configService: ConfigService,
  ){}

  clientProxyUsers(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: this.configService.get('AMQP_URL'),
        queue: RabbitMQ.UserQueue,
      }
    })
  }

}