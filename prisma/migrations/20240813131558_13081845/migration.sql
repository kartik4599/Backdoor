/*
  Warnings:

  - Added the required column `organizationId` to the `Passwords` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Passwords" ADD COLUMN     "organizationId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Passwords" ADD CONSTRAINT "Passwords_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
