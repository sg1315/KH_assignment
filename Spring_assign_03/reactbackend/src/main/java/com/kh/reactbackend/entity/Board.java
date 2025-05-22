package com.kh.reactbackend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@AllArgsConstructor
@Getter
@Table(name = "BOARD")
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_no")
    private Long boardNo;

    @Column(name = "board_title", nullable = false, length = 100)
    private String boardTitle;

    @Lob
    @Column(name = "board_content", nullable = false)
    private String boardContent;

    @Column(name = "create_date", updatable = false)
    private LocalDateTime createDate;

    //Board : Member (N:1)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_writer", nullable = false)
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category", nullable = false)
    private Category category;

    public void changeMember(Member member) {
        this.member = member;
        if(!member.getBoards().contains(this)) {
            member.getBoards().add(this);
        }
    }

    public void changeTitle(String boardTitle) {
        if(boardTitle != null && !boardTitle.isEmpty()) {
            this.boardTitle = boardTitle;
        }
    }

    public void changeContent(String boardContent) {
        if(boardContent != null && !boardContent.isEmpty()) {
            this.boardContent = boardContent;
        }
    }

    //Board : Reply (1 : N)
    @OneToMany(mappedBy = "board", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<Reply> replies = new ArrayList<>();

    @PrePersist
    protected void prePersist() {
        this.createDate = LocalDateTime.now();
    }
}
