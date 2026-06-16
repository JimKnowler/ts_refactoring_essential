export class WeatherReport {
    formatDailyReport(forecasts: Forecast[], output: string[]): void {
        for (const forecast of forecasts) {
            output.push(
                this.formatLine(forecast)
            );
            // if (forecast.isMorning()) {
            //     output.push(
            //         this.formatLine('Morning', forecast)
            //     );
            // }

            // if (forecast.isAfternoon()) {
            //     output.push(
            //         this.formatLine('Afternoon', forecast)
            //     );
            // }

            // if (forecast.isEvening()) {
            //     output.push(
            //         this.formatLine('Evening', forecast)
            //     );
            // }

            // if (forecast.isNight()) {
            //     output.push(
            //         this.formatLine('Night', forecast)
            //     );
            // }
        }
    }

    formatLine(forecast: Forecast): string {
        let label = forecast.timeOfDay();
        const temp = forecast.getTemperature().toFixed(1);
        const condition = forecast.getCondition();
        const wind = forecast.getWindSpeed();
        return `${label}: ${temp}°C, ${condition}, wind ${wind}km/h`
    }
}

export class Forecast {
    private period: string; // "morning", "afternoon", "evening", "night"
    private temperature: number;
    private condition: string;
    private windSpeed: number;

    constructor(period: string, temperature: number, condition: string, windSpeed: number) {
        this.period = period;
        this.temperature = temperature;
        this.condition = condition;
        this.windSpeed = windSpeed;
    }

    
    capitalizeFirstLetter(str: string): string { 
        if (!str) return str; 
        return str.charAt(0).toUpperCase() + str.slice(1); 
    }

    timeOfDay(): string {
        return this.capitalizeFirstLetter(this.period);
    }

    getTemperature(): number {
        return this.temperature;
    }

    getCondition(): string {
        return this.condition;
    }

    getWindSpeed(): number {
        return this.windSpeed;
    }

    isMorning(): boolean {
        return this.period === "morning";
    }

    isAfternoon(): boolean {
        return this.period === "afternoon";
    }

    isEvening(): boolean {
        return this.period === "evening";
    }

    isNight(): boolean {
        return this.period === "night";
    }
}