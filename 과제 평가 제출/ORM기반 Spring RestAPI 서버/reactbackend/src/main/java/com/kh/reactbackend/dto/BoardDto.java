package com.kh.reactbackend.dto;

import com.kh.reactbackend.entity.Board;
import lombok.*;

import java.time.LocalDateTime;

public class BoardDto {

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Create {
        private String board_title;
        private String board_content;
        private String board_writer;
        private String category;

        public Board toEntity() {
            return Board.builder()
                    .boardTitle(this.board_title)
                    .boardContent(this.board_content)
                    .build();
        }
    }

    @Getter
    @AllArgsConstructor
    @Builder
    public static class Response {
        private Long board_no;
        private String board_title;
        private String board_content;
        private String board_writer;
        private String category;
        private LocalDateTime create_date;

        public static Response toSimpleDto(Board board) {
            return Response.builder()
                    .board_no(board.getBoardNo())
                    .board_title(board.getBoardTitle())
                    .board_content(board.getBoardContent())
                    .board_writer(board.getMember().getUserId())
                    .category(board.getCategory().getCategoryName())
                    .create_date(board.getCreateDate())
                    .build();
        }
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Update {
        private String board_title;
        private String board_content;
        private String category;
    }
}
