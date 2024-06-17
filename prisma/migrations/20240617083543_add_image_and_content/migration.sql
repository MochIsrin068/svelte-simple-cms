-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "content" TEXT NOT NULL DEFAULT '<p></p>',
ADD COLUMN     "image" TEXT NOT NULL DEFAULT 'https://miro.medium.com/v2/resize:fit:640/format:webp/0*PG-oKUKcf5jDwHlW';
