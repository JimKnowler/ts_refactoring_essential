export class CustomerService {
    private emailValidator: EmailValidator = new EmailValidator();
    private customerDisplayFormatter: CustomerDisplayFormatter = new CustomerDisplayFormatter();

    public isValidEmail(email: string | null): boolean {
        return this.emailValidator.isValidEmail(email);
    }

    public formatDisplayName(firstName: string, lastName: string): string {
        return this.customerDisplayFormatter.formatDisplayName(firstName, lastName);
    }

    public calculateLoyaltyPoints(numberOfPurchases: number): number {
        return numberOfPurchases * 10;
    }

    public determineAccountStatus(daysSinceLastLogin: number): string {
        if (daysSinceLastLogin > 365) {
            return "INACTIVE";
        } else if (daysSinceLastLogin > 30) {
            return "DORMANT";
        }
        return "ACTIVE";
    }
}

class EmailValidator {
    public isValidEmail(email: string | null): boolean {
        if (email === null) {
            return false;
        }

        const emailRegex = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/;
        return emailRegex.test(email);
    }
}

class CustomerDisplayFormatter {
    public formatDisplayName(firstName: string, lastName: string): string {
        return firstName.trim() + " " + lastName.trim().toUpperCase();
    }
}