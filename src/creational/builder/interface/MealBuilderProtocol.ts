// -- This interface is the builder protocol
// This interface defines the methods that the builder must implement.
export interface MealBuilderProtocol {
    reset(): this;
    makeMeal(): this;
    makeDessert(): this;
}