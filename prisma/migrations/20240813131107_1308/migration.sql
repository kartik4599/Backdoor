-- CreateTable
CREATE TABLE "Passwords" (
    "id" SERIAL NOT NULL,
    "createdById" INTEGER NOT NULL,

    CONSTRAINT "Passwords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SharedPassword" (
    "userId" INTEGER NOT NULL,
    "passwordId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "SharedPassword_userId_key" ON "SharedPassword"("userId");

-- AddForeignKey
ALTER TABLE "Passwords" ADD CONSTRAINT "Passwords_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SharedPassword" ADD CONSTRAINT "SharedPassword_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SharedPassword" ADD CONSTRAINT "SharedPassword_passwordId_fkey" FOREIGN KEY ("passwordId") REFERENCES "Passwords"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
