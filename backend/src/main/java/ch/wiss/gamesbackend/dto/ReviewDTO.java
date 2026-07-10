package ch.wiss.gamesbackend.dto;

public record ReviewDTO(
        Long id,
        String reviewerName,
        int rating,
        String comment
) {}
