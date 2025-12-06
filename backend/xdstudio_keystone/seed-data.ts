import { Context } from '.keystone/types';
import env from './env';
type SeedTask = (context: Context) => Promise<void>;

const seedUser: SeedTask = async (context) => {
  const users = await context.db.User.findMany({});
  if (users.length === 0) {
    await context.db.User.createOne({
      data: { name: 'Thynne', email: 'khunthynne@gmail.com', password: '0926234961' },
    });
    console.log('✅ Seeded User');
  }
};
const seedSetting: SeedTask = async (context) => {
  const settings = await context.db.Setting.findMany({});
  if (settings.length === 0) {
    await context.db.Setting.createOne({
      data: {
        smtpHost: 'smtp.gmail.com',
        smtpPort: '587',
        smtpUser: 'khunthynne@gmail.com',
        smtpPass: 'gjaf vtdl qktw bjku',
        redirect: env.NEXT_PUBLIC_SITE_URL,
      },
    });
    console.log('✅ Seeded Setting');
  }
};

const seedTasks: SeedTask[] = [seedUser, seedSetting];

export const SeedData = async (context: Context) => {
  for (const task of seedTasks) {
    await task(context);
  }
};
