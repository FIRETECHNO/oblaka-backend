import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { IBookForm } from './interfaces/IBookForm.interface';

@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) { }

  @Post('send-book-form')
  @HttpCode(HttpStatus.OK)
  async sendApplication(
    @Body() applicationData: IBookForm,
  ) {
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!chatId) {
      throw new Error('TELEGRAM_CHAT_ID is not set in environment variables');
    }

    await this.telegramService.sendApplicationToChat(chatId, applicationData);
    return { success: true };
  }
}