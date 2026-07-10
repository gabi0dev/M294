package ch.wiss.gamesbackend.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;

import java.util.List;

public record GameFormDTO(
        @NotBlank(message = "darf nicht leer sein.")
        String title,

        String genre,

        String platform,

        String imageUrl,

        @Valid
        List<ReviewFormDTO> reviews
) {}
