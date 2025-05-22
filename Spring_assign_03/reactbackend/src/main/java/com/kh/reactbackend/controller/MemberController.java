package com.kh.reactbackend.controller;

import com.kh.reactbackend.dto.MemberDto;
import com.kh.reactbackend.entity.Member;
import com.kh.reactbackend.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/members")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @PostMapping
    public ResponseEntity<String> createMember(@RequestBody MemberDto.Create createDto) {
        String userId = memberService.createMember(createDto);
        return ResponseEntity.ok(userId);
    }

    @PostMapping("/login")
    public ResponseEntity<MemberDto.Response> findMember(@PathVariable String userId) {

        return null;
    }


}
