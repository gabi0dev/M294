package ch.wiss.gamesbackend.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

public record ReviewFormDTO(
        @NotBlank(message = "darf nicht leer sein.")
        String reviewerName,

        @Min(value = 1, message = "muss mindestens 1 sein.")
        @Max(value = 5, message = "darf hoechstens 5 sein.")
        int rating,

        String comment
) {}
