package com.kh.board.controller.dto.request;

import com.kh.board.entity.Board;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;

public class BoardRequest {

    @Getter
    @Setter
    @Builder
    public static class RequestDTO{

        private String title;
        private String userId;
        private String contents;
        private String upfile;

        public static RequestDTO formEntity(Board board) {
            return RequestDTO.builder()
                             .title(board.getTitle())
                             .userId(board.getMemberEmail())
                             .contents(board.getContents())
                             .upfile(board.getFileName())
                             .build();

        }
    }
}
