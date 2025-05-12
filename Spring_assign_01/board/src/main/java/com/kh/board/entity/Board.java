package com.kh.board.entity;

import java.time.LocalDateTime;

import lombok.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
public class Board {
    private Long boardId;
    private String title;
    private String contents;
    private String fileName;
    private String memberEmail;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    //변경이 필요한 부분만 setter를 작성해준다.
    public void changeFileName(String fileName) { this.fileName = fileName; }
}
