export class CustomerService {
    private emailValidator = new EmailValidator();
    private customerDisplayFormatter = new CustomerDisplayFormatter();
    private loyaltyService = new LoyaltyService();
    private accountStatusService = new AccountStatusService();

    public isValidEmail(email: string | null): boolean {
        return this.emailValidator.isValidEmail(email);
    }

    public formatDisplayName(firstName: string, lastName: string): string {
        return this.customerDisplayFormatter.formatDisplayName(firstName, lastName);
    }

    public calculateLoyaltyPoints(numberOfPurchases: number): number {
        return this.loyaltyService.calculateLoyaltyPoints(numberOfPurchases);
    }

    public determineAccountStatus(daysSinceLastLogin: number): string {
        return this.accountStatusService.determineAccountStatus(daysSinceLastLogin);
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

class LoyaltyService {
    public calculateLoyaltyPoints(numberOfPurchases: number): number {
        return numberOfPurchases * 10;
    }
}

class AccountStatusService {
    public determineAccountStatus(daysSinceLastLogin: number): string {
        if (daysSinceLastLogin > 365) {
            return "INACTIVE";
        } else if (daysSinceLastLogin > 30) {
            return "DORMANT";
        }
        return "ACTIVE";
    }
}