package ch.wiss.gamesbackend.dto;

import java.util.List;

public record GameDTO(
        Long id,
        String title,
        String genre,
        String platform,
        String imageUrl,
        List<ReviewDTO> reviews
) {}
