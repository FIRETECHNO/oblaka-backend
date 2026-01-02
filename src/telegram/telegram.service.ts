import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Telegraf } from 'telegraf';
import { AxiosResponse } from 'axios';
import { IBookForm } from './interfaces/IBookForm.interface';

@Injectable()
export class TelegramService {
  private bot: Telegraf;

  constructor(private configService: ConfigService) {
    const token = this.configService.get('TELEGRAM_BOT_TOKEN');
    if (!token) {
      throw new Error('TELEGRAM_BOT_TOKEN is not set in environment variables');
    }

    this.bot = new Telegraf(token);
  }

  async sendApplicationToChat(chatId: string, applicationData: IBookForm): Promise<void> {
    const message = this.formatApplicationMessage(applicationData);
    try {
      await this.bot.telegram.sendMessage(chatId, message, { parse_mode: 'HTML' });
    } catch (error) {
      console.error('Failed to send message to Telegram:', error);
      throw error;
    }
  }

  private formatPhoneForTelegram(phone: string): string {
    if (!phone) return 'не указан';
    let cleaned = phone.replace(/\D/g, ''); // оставить только цифры
    if (cleaned.startsWith('8')) {
      cleaned = '+7' + cleaned.slice(1);
    } else if (cleaned.startsWith('7')) {
      cleaned = '+' + cleaned;
    } else if (!cleaned.startsWith('+')) {
      cleaned = '+7' + cleaned;
    }
    return cleaned;
  }

  private formatApplicationMessage(data: IBookForm): string {
    const phone = this.formatPhoneForTelegram(data.phone)
    if (data?.eventType) {
      return `
      <b>Заявка на проведение мероприятия</b>\n
<b>Имя гостя: </b> ${data.name}
<b>Телефон: </b> ${phone}
<b>Дата: </b> ${data.date}
<b>Тип мероприятия: </b> ${data.eventType}`
    }
    return `
      <b>Новое бронирование столика</b>\n
<b>Имя гостя: </b> ${data.name}
<b>Телефон: </b> ${phone}
<b>Дата: </b> ${data.date}`
  }
}