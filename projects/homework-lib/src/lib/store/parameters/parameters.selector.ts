import { createSelector } from "@ngrx/store";
import { AppState } from "../app-store";

export const parametersFeature = (state: AppState) => state.parameters;

export const selectParameters = createSelector(parametersFeature, (parameters) => parameters.list);
export const selectIsLoading = createSelector(parametersFeature, (parameters) => parameters.isLoading);
