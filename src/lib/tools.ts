import { password } from 'bun';

export const hashedPassword = async (pass: string) => {
  return await password.hash(pass, {
    algorithm: 'bcrypt',
    cost: 12, // 10-12 is recommended for bcrypt
  });
};

export const validatePassword = async (pass: string, hasPass: string) => {
  return await password.verify(pass, hasPass);
};

export const getExpiryTime = (expireString: string) => {
  const now = Math.floor(Date.now() / 1000);
  const unit = expireString.slice(-1);
  const value = parseInt(expireString.slice(0, -1), 10);

  const secondsToAdd =
    unit === 's'
      ? value
      : unit === 'm'
        ? value * 60
        : unit === 'h'
          ? value * 60 * 60
          : unit === 'd'
            ? value * 60 * 60 * 24
            : (() => {
                throw new Error(
                  `Invalid time unit in expiration string: ${expireString}`,
                );
              })();

  return now + secondsToAdd;
};

export const generateOtp = () => {
  const digits = '0123456789';
  let otp = '';

  for (let i = 0; i < 6; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }

  return otp.toString();
};

export const generatePassword = (length: number = 12): string => {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*';

  const allChars = lowercase + uppercase + numbers + symbols;
  let generatedPassword = '';

  // Ensure at least one character from each category
  generatedPassword += lowercase[Math.floor(Math.random() * lowercase.length)];
  generatedPassword += uppercase[Math.floor(Math.random() * uppercase.length)];
  generatedPassword += numbers[Math.floor(Math.random() * numbers.length)];
  generatedPassword += symbols[Math.floor(Math.random() * symbols.length)];

  // Fill the rest with random characters from all categories
  for (let i = 4; i < length; i++) {
    generatedPassword += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // Shuffle the password to make it more random
  return generatedPassword
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};
