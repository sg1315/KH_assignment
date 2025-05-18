package com.kh.jpa.dto;

import com.kh.jpa.entity.Member;
import com.kh.jpa.entity.Notice;
import lombok.*;

import java.time.LocalDateTime;

public class NoticeDto {

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Create {
        private String notice_title;
        private String notice_content;
        private String notice_writer;

        public Notice toEntity(Member member) {
            return Notice.builder()
                    .noticeTitle(this.notice_title)
                    .noticeContent(this.notice_content)
                    .member(member)
                    .build();
        }
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class Response {
        private Long notice_no;
        private String notice_title;
        private String notice_content;
        private String notice_writer;
        private LocalDateTime create_date;

        public static Response toDto(Notice notice) {
            return Response.builder()
                    .notice_no(notice.getNoticeNo())
                    .notice_title(notice.getNoticeTitle())
                    .notice_content(notice.getNoticeContent())
                    .notice_writer(notice.getMember().getUserId())
                    .create_date(notice.getCreateDate())
                    .build();
        }
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Update {
        private String notice_title;
        private String notice_content;
    }

}
