import { Publisher, OrderCreatedEvent, Subjects } from '@rudotickets/common'

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated
}
