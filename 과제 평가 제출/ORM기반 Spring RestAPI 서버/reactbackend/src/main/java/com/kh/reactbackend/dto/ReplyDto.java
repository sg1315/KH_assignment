package com.kh.reactbackend.dto;

import com.kh.reactbackend.entity.Reply;
import lombok.*;

import java.time.LocalDateTime;

public class ReplyDto {

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Create {
        private String reply_content;
        private Long ref_bno;
        private String reply_writer;

        public Reply toEntity() {
            return Reply.builder()
                    .replyContent(this.reply_content)
                    .build();
        }
    }

    @Getter
    @AllArgsConstructor
    @Builder
    public static class Response {
        private Long reply_no;
        private String reply_content;
        private Long ref_bno;
        private String reply_writer;
        private LocalDateTime create_date;

        public static Response toSimpleDto(Reply reply) {
            return Response.builder()
                    .reply_no(reply.getReplyNo())
                    .reply_content(reply.getReplyContent())
                    .ref_bno(reply.getBoard().getBoardNo())
                    .reply_writer(reply.getMember().getUserId())
                    .create_date(reply.getCreateDate())
                    .build();
        }
    }
}
